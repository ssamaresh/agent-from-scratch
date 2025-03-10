import 'dotenv/config'
import { addMessages, getMessages } from './src/memory'
import { runAgent } from './src/agent'
import { z } from 'zod'
const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

const timeTool = {
  name: 'get_time',
  parameters: z.object({}),
}

const response = await runAgent({
  userMessage,
  tools: [timeTool],
})

console.log(response)
