import { MessageReaction, User, PartialUser } from 'discord.js';
import { beginnersRoleId, rulesMsgId } from '../configs/config';

export default class ReactionHandler {
  public static async handle(reaction: MessageReaction, user: User | PartialUser) : Promise<void> {
    try {
      if (reaction.message.id === rulesMsgId) {
        const guildMember = reaction.message.guild?.members.cache.get(user.id);

        if (!guildMember?.roles.cache.get(beginnersRoleId)) {
          guildMember?.roles.add(beginnersRoleId);
        }
      }
    } catch (Err) {
      console.log(Err);
    }
  }
}
