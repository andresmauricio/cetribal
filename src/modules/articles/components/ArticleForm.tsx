import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useArticle } from "../hooks/useArticle";
import { useParams } from "react-router-dom";

export function ArticleForm() {
  const { articleForm } = useArticle();
  const params = useParams();
  return (
    <Box p={10}>
      <Stack alignItems="center" justifyContent="space-between">
        <Paper sx={{ p: 10 }}>
          <Typography variant="h3" mb={6}>
            {params.id ? "Actualizar Articulo" : "Crear Articulo"}
          </Typography>
          <form onSubmit={articleForm.handleSubmit}>
            <Stack flexDirection="column" gap={4} width={600}>
              <TextField
                label="Nombre"
                variant="outlined"
                name="name"
                value={articleForm.values.name}
                onChange={articleForm.handleChange}
              />
              <TextField
                label="Tax"
                variant="outlined"
                name="tax"
                value={articleForm.values.tax}
                onChange={articleForm.handleChange}
              />
              <TextField
                label="Precio"
                variant="outlined"
                name="price"
                value={articleForm.values.price}
                onChange={articleForm.handleChange}
              />
              <Button type="submit">Crear</Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Box>
  );
}
