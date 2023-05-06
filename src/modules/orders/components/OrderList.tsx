import { Edit } from "@mui/icons-material";
import { useOrderList } from "../hooks/useOrderList";
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
import { useNavigate } from "react-router-dom";

export function OrderList() {
  const naviagte = useNavigate();
  const { orders } = useOrderList();

  return (
    <Box p={10}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h3" my={6}>
          Listado de Ordenes
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
              <TableCell>Cantidad de productos</TableCell>
              <TableCell>Total</TableCell>
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
