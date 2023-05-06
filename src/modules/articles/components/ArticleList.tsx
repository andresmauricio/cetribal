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
import { useTranslation } from "react-i18next";

export function ArticleList() {
  const { articles } = useArticleList();
  const { t } = useTranslation();
  const naviagte = useNavigate();

  return (
    <Box p={10}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h3" my={6}>
          {t("listArticles")}
        </Typography>
        <Box>
          <Button onClick={() => naviagte("new")}>{t("create")}</Button>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("reference")}</TableCell>
              <TableCell>{t("name")}</TableCell>
              <TableCell>{t("price")}</TableCell>
              <TableCell>{t("text")}</TableCell>
              <TableCell>{t("actions")}</TableCell>
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
