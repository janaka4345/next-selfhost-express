import express from "express";
import { nextApp, nextHandler } from "./nextUtils";
const app = express()
const PORT = Number(process.env.PORT) || 3000

async function start() {
    app.use((req, res) => nextHandler(req, res))
}
nextApp.prepare().then(() => {
    console.log('next app started');
    app.listen(PORT, async () => {
        console.log(`next app url-${process.env.NEXT_PUBLIC_SERVER_URL}`);
    })
})
start()