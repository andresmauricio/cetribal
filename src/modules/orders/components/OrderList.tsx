import { useOrderList } from "../hooks/useOrderList";
import {
  Box,
  Button,
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
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function OrderList() {
  const naviagte = useNavigate();
  const { orders } = useOrderList();
  const { t } = useTranslation();

  return (
    <Box p={10}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h3" my={6}>
          {t("listOrders")}
        </Typography>
        <Box>
          <Button onClick={() => naviagte("new")}>Crear</Button>
        </Box>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("reference")}</TableCell>
              <TableCell>{t("articlesQuantity")}</TableCell>
              <TableCell>{t("total")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.articles.length}</TableCell>
                <TableCell>
                  $ {(Number(order.total) + Number(order.taxes)).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
