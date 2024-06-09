import { useEffect, useState } from "react";
import "./Forms.scss";

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

const DailyLogForm = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e, category, type) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [type]: {
        ...formData[type],
        [category]: checked
          ? [...formData[type][category], name]
          : formData[type][category].filter((item) => item !== name),
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const symptomCategories = {
    category1: ["Difficulty sustaining attention", "Symptom 2", "Symptom 3"],
    category2: ["Symptom 4", "Symptom 5", "Symptom 6"],
    category3: ["Symptom 7", "Symptom 8", "Symptom 9"],
    category4: ["Symptom 10", "Symptom 11", "Symptom 12"],
    category5: ["Symptom 13", "Symptom 14", "Symptom 15"],
  };

  const experienceCategories = {
    category1: [
      "Experience 1",
      "Experience 2",
      "Experience 3",
      "Experience 4",
      "Experience 5",
    ],
    category2: [
      "Experience 6",
      "Experience 7",
      "Experience 8",
      "Experience 9",
      "Experience 10",
    ],
    category3: [
      "Experience 11",
      "Experience 12",
      "Experience 13",
      "Experience 14",
      "Experience 15",
    ],
    category4: [
      "Experience 16",
      "Experience 17",
      "Experience 18",
      "Experience 19",
      "Experience 20",
    ],
    category5: ["Experience 21", "Experience 22"],
  };

  const categoryNames = {
    category1: "Attention and Focus",
    category2: "Hyperactivity and Focus",
    category3: "Emotional Regulation",
    category4: "Daily Functioning",
    category5: "Sleep and Physicality",
  };

  const experienceCategoryNames = {
    category1: "Overall Mood",
    category2: "Energy Levels",
    category3: "Stress Levels",
    category4: "Sleep Quality",
    category5: "Medication Taken",
  };

  return (
    <section className="dl">
      <form className="dl-form" onSubmit={handleSubmit}>
        <section className="dl-form__description">
          <label>
            <h3 className="dl-form__title">How are you feeling, really?</h3>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              placeholder="Write 1-2 sentences describing your day."
            />
          </label>
        </section>
        <section className="dl-form__symptoms">
          <h3 className="dl-form__title">Let's keep track of your day:</h3>
          <div className="dl-form__container">
            {Object.keys(symptomCategories).map((category) => (
              <div className="dl-form__container-category" key={category}>
                <h4>{categoryNames[category]}</h4>
                <div className="dl-form__checklist">
                  {symptomCategories[category].map((symptom) => (
                    <label className="dl-form__checklist-text" key={symptom}>
                      <input
                        type="checkbox"
                        name={symptom}
                        checked={formData.symptomChecklist[category].includes(
                          symptom
                        )}
                        onChange={(e) =>
                          handleCheckboxChange(e, category, "symptomChecklist")
                        }
                      />
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
            {Object.keys(experienceCategories).map((category) => (
              <div key={category}>
                <h4>{experienceCategoryNames[category]}</h4>
                {experienceCategories[category].map((experience) => (
                  <label key={experience}>
                    <input
                      type="checkbox"
                      name={experience}
                      checked={formData.experienceChecklist[category].includes(
                        experience
                      )}
                      onChange={(e) =>
                        handleCheckboxChange(e, category, "experienceChecklist")
                      }
                    />
                    {experience}
                  </label>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label>
            Events (3-4 sentences):
            <textarea
              name="events"
              value={formData.events}
              onChange={handleInputChange}
              rows="4"
            />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default DailyLogForm;

/* -------------------------------------------------------------------------- */
/*                                Form Exports                                */
/* -------------------------------------------------------------------------- */

export { LogInForm, DailyLogForm };
