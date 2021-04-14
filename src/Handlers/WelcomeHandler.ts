/* eslint-disable class-methods-use-this */
import { GuildMember, TextChannel } from 'discord.js';
import { beginnersRole, welcomeGuildId } from '../configs/config';

export default class WelcomeHandler {
  public static async handle(member: GuildMember): Promise<void> {
    try {
      console.log('aqui');
      const role = member.guild.roles.cache.get(beginnersRole);
      if (!role) {
        throw Error('Begginers role not found');
      }
      member.roles.add(role);
      const channel = member.guild.channels.cache.get(welcomeGuildId);
      (channel as TextChannel).send(`Seja bem vindo ${member.nickname}!! `);
    } catch (Err) {
      console.log(Err);
    }
  }
}
