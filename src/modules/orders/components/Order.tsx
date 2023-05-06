import {
  Box,
  Stack,
  Typography,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useOrder } from "../hooks/useOrder";
import { useArticleList } from "../../articles/hooks/useArticleList";
import { Add, Image } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export function Order() {
  const params = useParams();
  const { addArticleToOrder, hasProduct, order, createOrder } = useOrder();
  const { articles } = useArticleList();
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 10 }}>
      <Typography variant="h3" mb={6}>
        {params.id ? t("updateOrder") : t("createOrder")}
      </Typography>
      <Stack flexDirection="row" gap={4} justifyContent="space-between">
        <Box sx={{ width: "100%", textAlign: "center" }} flex={2}>
          <Typography variant="h4" mb={4}>
            {t("listArticles")}
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 460,
              bgcolor: "background.paper",
              margin: "0 auto",
            }}
          >
            {articles.map((article) => (
              <ListItem
                key={article.id}
                alignItems="center"
                sx={{ justifyContent: "space-between", p: 2 }}
              >
                <Stack flexDirection="row" alignItems="center">
                  <ListItemAvatar>
                    <Avatar>
                      <Image />
                    </Avatar>
                  </ListItemAvatar>
                  <Typography>{article.name}</Typography>
                </Stack>
                {!hasProduct(article) ? (
                  <IconButton onClick={() => addArticleToOrder(article)}>
                    <Add />
                  </IconButton>
                ) : null}
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex={1}>
          <Typography variant="h4" mb={4}>
            {t("summary")}
          </Typography>
          {order ? (
            <Card>
              <CardContent>
                <Stack flexDirection="column" gap={4}>
                  <Typography variant="h5">
                    {t("quantity")}: {order?.articles.length}
                  </Typography>
                  <Typography variant="h5">
                    {t("tax")}: ${Number(order?.taxes).toFixed(2)}
                  </Typography>
                  <Typography variant="h5">
                    {t("total")}: ${Number(order?.total).toFixed(2)}
                  </Typography>
                  <Button type="submit" onClick={createOrder}>
                    {t("create")}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ) : (
            <Typography variant="h5" fontWeight={700}>
              {t("notHasArticles")}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}
