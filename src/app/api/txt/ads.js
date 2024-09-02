export default function handler(req, res) {
    res.send(process.env.ADS_TXT.replace(/\\n/gm, "\n"));
}