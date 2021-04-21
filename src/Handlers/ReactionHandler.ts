import {
  MessageReaction, User, PartialUser, Channel, TextChannel,
} from 'discord.js';
import { beginnersRoleId, rulesMsgId, welcomeGuildId } from '../configs/config';

export default class ReactionHandler {
  public static async handle(reaction: MessageReaction, user: User | PartialUser) : Promise<void> {
    try {
      if (reaction.message.id === rulesMsgId) {
        const guildMember = reaction.message.guild?.members.cache.get(user.id);

        if (!guildMember?.roles.cache.get(beginnersRoleId)) {
          guildMember?.roles.add(beginnersRoleId);
          const welcomeChannel = reaction.message.guild?.channels.cache.get(welcomeGuildId);
          (welcomeChannel as TextChannel).send(`Olá ${user.username}:hand_splayed:, bem vindo(a) a comunidade Brain Rabbit, antes de começar leia algumas informações base em #:no_entry_sign:regras e acompanhe sempre as #:mega:novidades .`);
        }
      }
    } catch (Err) {
      console.log(Err);
    }
  }
}
