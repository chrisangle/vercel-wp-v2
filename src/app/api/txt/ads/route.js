// export default function handler(req, res) {
//     const adsTxt = process.env.ADS_TXT || ''; // Fallback in case the env variable is not set
//     console.log("adsTxt ",adsTxt);
    
//     res.setHeader('Content-Type', 'text/plain'); // Set the content type for ads.txt
//     res.send(adsTxt.replace(/\\n/gm, "\n"));
//     // res.send(process.env.ADS_TXT.replace(/\\n/gm, "\n"));
// }

import { NextResponse } from 'next/server'

export async function GET() {
    const adsTxt = process.env.ADS_TXT || ''; // Fallback in case the env variable is not set
    // Set the content type for ads.txt
    const response = new NextResponse(adsTxt.replace(/\\n/gm, "\n"));
    response.headers.set('Content-Type', 'text/plain'); // Set Content-Type header

    return response; // Return the response
}