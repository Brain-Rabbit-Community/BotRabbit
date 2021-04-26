import { Message } from 'discord.js';

export default interface CommandsDTO {
  name: string;
  message: Message;
  description: string;
}