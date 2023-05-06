import { log } from "console";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Article } from "~domain/models";
import { articleService } from "~domain/services";

export function useArticle() {
  const params = useParams();
  const navigate = useNavigate();
  const articleForm = useFormik<Partial<Article>>({
    initialValues: {
      name: "",
      tax: "",
      price: "",
    },
    onSubmit,
  });

  const getByReference = async (id: string) => {
    const response = await articleService.getByReference(id);
    console.log(response);

    articleForm.setValues(response?.[0]);
  };

  async function onSubmit(values: any) {
    params.id
      ? await articleService.updateArticle(values, params.id?.toString() ?? "")
      : await articleService.createArticle(values);
    navigate(-1);
  }

  useEffect(() => {
    if (!params?.id) return;
    getByReference(params.id?.toString() ?? "");
  }, [params.id]);

  return { articleForm };
}
