import React, { useState } from "react";
import {
    ThemeProvider,
    createTheme,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
} from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00e6e6",
        },
        secondary: {
            main: "#ff5555",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
});

const CoinFlipSimulator: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);
    const [flipping, setFlipping] = useState(false);
    const [history, setHistory] = useState<string[]>([]);

    const isMobile = useMediaQuery("(max-width:600px)");

    const flipCoin = () => {
        setFlipping(true);
        setResult(null);

        setTimeout(() => {
            const outcomes = ["✅", "❌"];
            const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
            setResult(outcome);
            setHistory((prev) => [outcome, ...prev.slice(0, 4)]);
            setFlipping(false);
        }, 900);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: "#111",
                    gap: 3,
                    paddingTop: "3rem",
                    paddingX: "1rem",
                }}
            >
                <Typography
                    variant={isMobile ? "h4" : "h3"}
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Coin Flip Simulator
                </Typography>

                <Box
                    sx={{
                        width: 250,
                        height: 250,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "1rem",
                    }}
                >
                    {flipping ? (
                        <Typography
                            sx={{
                                animation: "flip 0.6s linear 3",
                                fontSize: isMobile ? "6rem" : "10rem",
                                color: theme.palette.primary.main,
                            }}
                        >
                            🟡
                        </Typography>
                    ) : result ? (
                        <Typography
                            sx={{
                                fontSize: isMobile ? "6rem" : "10rem",
                                color: result === "✅" ? "#00e6e6" : "#ff5555",
                                transition: "color 0.3s ease",
                            }}
                        >
                            {result}
                        </Typography>
                    ) : null}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: 2,
                        marginTop: "1.5rem",
                        width: "100%",
                        maxWidth: "500px",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={flipCoin}
                        disabled={flipping}
                        fullWidth={isMobile}
                        sx={{
                            fontSize: isMobile ? "1rem" : "1.25rem",
                            fontWeight: "bold",
                            padding: "0.75rem 2rem",
                        }}
                    >
                        Flip the Coin
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={clearHistory}
                        fullWidth={isMobile}
                        sx={{
                            fontSize: isMobile ? "1rem" : "1.25rem",
                            fontWeight: "bold",
                            padding: "0.75rem 2rem",
                            borderColor: "#ff5555",
                            color: "#ff5555",
                        }}
                    >
                        Clear History
                    </Button>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        maxWidth: "400px",
                        backgroundColor: "#222",
                        borderRadius: "8px",
                        padding: "1rem",
                        marginTop: "2rem",
                        marginX: isMobile ? "1rem" : 0,
                        boxSizing: "border-box",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: theme.palette.primary.main,
                            marginBottom: "1rem",
                            textAlign: "center",
                        }}
                    >
                        Flip History
                    </Typography>
                    <List>
                        {history.map((item, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    backgroundColor: "#333",
                                    borderRadius: "4px",
                                    marginBottom: "0.5rem",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0.5rem 1rem",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#aaa",
                                        fontSize: "1rem",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {index + 1}.
                                </Typography>
                                <ListItemText
                                    primary={item}
                                    primaryTypographyProps={{
                                        style: {
                                            color: item === "✅" ? "#00e6e6" : "#ff5555",
                                            fontWeight: "bold",
                                            fontSize: "1.25rem",
                                            textAlign: "right",
                                        },
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default CoinFlipSimulator;
