import {Stack} from "expo-router";

import {
    QueryClient,
    QueryClientProvider
}from "react-query";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();

export default function RootLayout(){
    return(
        <QueryClientProvider client={queryClient}>
            <Stack>
                <Stack.Screen 
                name="index"
                options={{headerShown: false, title: "Home"}}/>
                <Stack.Screen
                name="transfer"
                options={{title: "Transfer"}}
                />
                <Stack.Screen
                name="fxrate"
                options={{title: "Exchange Rate"}}
                />
                <Stack.Screen
                name="history"
                options={{title: "History"}}/>
            </Stack>
        </QueryClientProvider>
    )
}