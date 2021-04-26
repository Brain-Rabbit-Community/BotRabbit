import fs from 'fs';

import { Message } from 'discord.js';
import { prefix } from '../configs/config';

const commandFolderPath = './Commands';

export default class CommandHandler {
 private commandFiles = fs.readdir(commandFolderPath,
   (_err, commands) => {
     commands.filter(
       (command) => command.endsWith('.ts'),
     );
   })

 public static async handle(message: Message): Promise<void> {
   if (message.author.bot) return;
   if (!message.content.startsWith(prefix)) return;

   const commandBody = message.content.slice(prefix.length);
   const args = commandBody.split(' ');
   const command = args.shift()?.toLowerCase();
   if (command === 'ping') {
     message.reply('pong');
   }
 }
}
