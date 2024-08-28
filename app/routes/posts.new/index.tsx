import { ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  console.log(title, body);
  // return redirect("/");
  return null;
};

export default function () {
  return (
    <div>
      <h1>Form</h1>
      <Form method="post">
        <input type="text" name="title" />
        <textarea name="body" />
        <button type="submit">送信</button>
      </Form>
    </div>
  );
}
