import ICommands from './ICommands';
import CommandsDTO from './commandsDTO';

export default class Ping implements ICommands {
  public static async execute({name, message}: CommandsDTO): Promise<void> {
    
  }
}
