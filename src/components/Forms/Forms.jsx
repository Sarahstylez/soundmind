import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.scss";
import { PrimaryButton, SecondaryButton } from "../CTAs/CTAs";

/* -------------------------------------------------------------------------- */
/*                                 Log In Form                                */
/* -------------------------------------------------------------------------- */

function LogInForm() {
  useEffect(() => {
    window.scrollTo(0, 0);

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login__container">
      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__form-container">
          <label className="login__form-label" htmlFor="username">
            Username
          </label>
          <input
            className="login__form-input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login__form-container">
          <label className="login__form-label" htmlFor="password">
            Password
          </label>
          <input
            className="login__form-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Daily Log Form                               */
/* -------------------------------------------------------------------------- */

function DailyLogForm(props) {
  const { id } = props; // Extract id from props

  const [formData, setFormData] = useState({
    description: "",
    symptomChecklist: {
      category1: [],
      category2: [],
      category3: [],
      category4: [],
      category5: [],
    },
    experienceChecklist: {
      category1: [],
      category2: [],
      category3: [],
      category4: [],
      category5: [],
    },
    events: "",
  });

  const [categories, setCategories] = useState({
    symptomCategories: {},
    experienceCategories: {},
    categoryNames: {},
    experienceCategoryNames: {},
  });

  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(true); // Start in edit mode

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/symptoms.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Check if there's saved data in local storage
        const savedData = localStorage.getItem(`dailyLog-${id}`);
        if (savedData) {
          setFormData(JSON.parse(savedData));
        } else {
          setFormData({
            description: data.description || "",
            symptomChecklist: data.symptomChecklist || {
              category1: [],
              category2: [],
              category3: [],
              category4: [],
              category5: [],
            },
            experienceChecklist: data.experienceChecklist || {
              category1: [],
              category2: [],
              category3: [],
              category4: [],
              category5: [],
            },
            events: data.events || "",
          });
        }

        setCategories({
          symptomCategories: data.symptomCategories || {},
          experienceCategories: data.experienceCategories || {},
          categoryNames: data.categoryNames || {},
          experienceCategoryNames: data.experienceCategoryNames || {},
        });
      } catch (error) {
        console.error("Error fetching form data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e, category, type) => {
    const { name, checked } = e.target;

    if (type === "experienceChecklist") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [type]: {
          ...prevFormData[type],
          [category]: checked ? [name] : [],
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [type]: {
          ...prevFormData[type],
          [category]: checked
            ? [...prevFormData[type][category], name]
            : prevFormData[type][category].filter((item) => item !== name),
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const timestamp = new Date().toISOString();
    // const dataWithTimestamp = { ...formData, timestamp };
    // Log the form data to the console
    console.log("Form Data Submitted:", JSON.stringify(formData, null, 2));

    // Store the form data in local storage
    localStorage.setItem(`dailyLog-${id}`, JSON.stringify(formData));

    // Optionally, handle success (e.g., show a success message)
    alert("Form data has been saved locally.");

    // Switch to view mode
    setEditMode(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="dl">
      <form className="dl-form" onSubmit={editMode ? handleSubmit : handleEdit}>
        <section className="dl-form__description">
          <label>
            <h3 className="dl-form__title">How are you feeling, really?</h3>
            {editMode ? (
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                placeholder="Write 1-2 sentences describing your day."
              />
            ) : (
              <p>{formData.description}</p>
            )}
          </label>
        </section>
        <section className="dl-form__symptoms">
          <h3 className="dl-form__title">Let's keep track of your day:</h3>
          <div className="dl-form__container">
            {Object.keys(categories.symptomCategories).map((category) => (
              <div className="dl-form__container-category" key={category}>
                <h4>{categories.categoryNames[category]}</h4>
                <div className="dl-form__checklist">
                  {categories.symptomCategories[category].map((symptom) => (
                    <label
                      className="dl-form__checklist-text checkbox-container"
                      key={symptom}
                    >
                      <input
                        type="checkbox"
                        name={symptom}
                        checked={formData.symptomChecklist[category].includes(
                          symptom
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(e, category, "symptomChecklist")
                        }
                        disabled={!editMode} // Disable checkbox when not in edit mode
                      />{" "}
                      <span className="checkmark"></span>
                      {symptom}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div>
          <h3 className="dl-form__title">How did today go?</h3>
          <div className="dl-form__container">
            {Object.keys(categories.experienceCategories).map((category) => (
              <div className="dl-form__container-category" key={category}>
                <h4>{categories.experienceCategoryNames[category]}</h4>
                <div className="dl-form__checklist">
                  {categories.experienceCategories[category].map(
                    (experience) => (
                      <label
                        className="dl-form__checklist-text checkbox-container"
                        key={experience}
                      >
                        <input
                          type="checkbox"
                          name={experience}
                          checked={formData.experienceChecklist[
                            category
                          ].includes(experience)}
                          onChange={(e) =>
                            handleCheckboxChange(
                              e,
                              category,
                              "experienceChecklist"
                            )
                          }
                          disabled={!editMode} // Disable checkbox when not in edit mode
                        />
                        <span className="checkmark"></span>
                        {experience}
                      </label>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="dl-form__events">
          <label>
            <h3 className="dl-form__title">Anything else to add?</h3>
            {editMode ? (
              <textarea
                name="events"
                value={formData.events}
                onChange={handleInputChange}
                rows="5"
                placeholder="Include any additional notes about today and the events that occurred."
              />
            ) : (
              <p>{formData.events}</p>
            )}
          </label>
        </section>
        <section className="dl-form__CTAs">
          <PrimaryButton label={editMode ? "Save" : "Edit"} type="submit" />
          <Link to="/home">
            <SecondaryButton label="Cancel" />
          </Link>
        </section>
      </form>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Form Exports                                */
/* -------------------------------------------------------------------------- */

export { LogInForm, DailyLogForm };
