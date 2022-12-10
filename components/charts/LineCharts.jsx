// LHT65-E1

import { Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts"

const fortmatDate = (date) => {
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1}`
}
const getDateAndTimeAsString = (date) => {
    const d = new Date(date)
    return `${d.getDate()}/${d.getMonth() + 1} ${d.getHours()}:${d.getMinutes()}`
}
export function LineCharts({ requests, device }) {
    const lastRequest = requests[requests.length - 1]
  
    if (device.label === "c1b843a0-7c9a-4c1b-85ee-f98027c1bc42") {
        return (
        <div>
            <LineChart
                width={600}
                height={200}
                data={requests}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="created" tickFormatter={fortmatDate} />
                <YAxis type="number" />
                <Tooltip />
                {/* <Line dot={false} type="monotone" dataKey="TempC_DS" stroke="#387908" yAxisId={0} /> */}
                <ReferenceLine y={0} label="Max" stroke="white" strokeDasharray="5 5" />
                <Line dot={false} type="monotone" dataKey="decoded_payload.TempC_SHT" name="Inside Temp" stroke="#9510AA" />
                <Line dot={false} type="monotone" dataKey="decoded_payload.TempC_DS" name="Outside Temp" stroke="#387908" />
            </LineChart>
        
            <LineChart
                width={600}
                height={100}
                data={requests}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <YAxis scale="auto" yAxisId={0} max="100" min="0"/>
                    <XAxis dataKey="created" tickFormatter={fortmatDate} />
                    <Tooltip />
                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                {/* <ReferenceLine y={50} label="Max" stroke="white" strokeDasharray="5 5" /> */}
                <Line dot={false} type="monotone" dataKey="decoded_payload.Hum_SHT" name="Inside Humidity" stroke="#ff7300" yAxisId={0} />
            </LineChart>
        </div>
        )
    } else {
        return null
    }
}