import CommandsDTO from './commandsDTO';

export default interface ICommands {
   execute({name, message}: CommandsDTO): Promise <void>;
}