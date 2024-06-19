"use client";

import ImagePicker from "@/components/meals/image-picker";
import MealsFormSubmit from "@/components/meals/meal-form-submit";
import { shareMeal } from "@/lib/actions";
import { useFormState } from "react-dom";
import classes from "./page.module.css";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(shareMeal, { message: null }); // 第一個職位表單操作, 第二個值為初始狀態

  // const [state, setState] = useState({ message: "", pending: false });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setState({ ...state, pending: true });
  //   try {
  //     const result = await shareMeal(null, formData);
  //     setState({ message: result.message, pending: false });
  //   } catch (error) {
  //     setState({ message: "Error submitting form", pending: false });
  //   }
  // };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
