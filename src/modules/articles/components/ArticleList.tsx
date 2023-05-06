import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useArticleList } from "../hooks/useArticleList";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function ArticleList() {
  const { articles } = useArticleList();
  const naviagte = useNavigate();

  return (
    <Box p={10}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h3" my={6}>
          Listado de Articulos
        </Typography>
        <Box>
          <Button onClick={() => naviagte("new")}>Crear</Button>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Referencia</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Impuesto</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articles.map((article) => (
              <TableRow
                key={article.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{article.id}</TableCell>
                <TableCell>{article.name}</TableCell>
                <TableCell>$ {article.price}</TableCell>
                <TableCell>$ {article.tax}</TableCell>
                <TableCell>
                  <IconButton onClick={() => naviagte(`${article.id}`)}>
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
