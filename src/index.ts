import { Client } from 'discord.js';
import * as dotenv from 'dotenv';
import CommandHandler from './Handlers/CommandHandler';
import ReactionHandler from './Handlers/ReactionHandler';

dotenv.config();
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('message', CommandHandler.handle);

client.on('messageReactionAdd', ReactionHandler.handle);

client.login(process.env.BOT_TOKEN);
