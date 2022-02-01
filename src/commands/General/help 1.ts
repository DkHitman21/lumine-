import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help 1',
            description: 'Displays the Econamy menu',
            category: 'general',
            aliases: ['h 1'],
            usage: `${client.config.prefix}help [1]`,
        })
    }

    run = async (
      M: ISimplifiedMessage,
      { joined }: IParsedArgs
    ): Promise<void> => {
            const buttons = [
              {
                buttonId: "help2",
                buttonText: { displayText: `${this.client.config.prefix}help2` },
                type: 1,
              },
              ];
            
            if(!joined)
            return void M.reply( ` \n\n_*🪙ECONAMY🪙*_\n\n 
            🎊${this.client.config.prefix}slot\n\n🎊 ${this.client.config.prefix}gamble\n\n🎊 ${this.client.config.prefix}give\n\n🎊 ${this.client.config.prefix}bank\n\n🎊 ${this.client.config.prefix}rob\n\n🎊 ${this.client.config.prefix}wallet\n\n🎊 ${this.client.config.prefix}deposit\n\n🎊 ${this.client.config.prefix}withdraw🎊${this.client.config.prefix}daily`)
              const chitoge: any = joined.trim();
              const buttonMessage: any = {
              contentText: `TO SEE THE NEXT COMMANDS LIST PRESS THE BUTTON!! `,
              footerText: "🎇 Beyond 🎇",
              buttons: buttons,
              headerType: 1,
              };
              await M.reply(buttonMessage, MessageType.buttonsMessage);
              ;
              ;
            
            };
          }
