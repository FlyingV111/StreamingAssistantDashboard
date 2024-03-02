import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DiscordOAuthService {

  constructor() { }

  private client_id = process.env['DISCORDDEV_CLIENT_ID']
  private client_secret = process.env['DISCORDDEV_SECRET']
  private redirectUri = 'http://localhost:4200/auth/discord/redirect';
  // private redirectUri = 'https://flyingv111.github.io/StreamingAssistantDashboard/auth/discord/redirect';
  private authorizeEndpoint = 'https://discord.com/oauth2/authorize';
  private tokenEndpoint = 'https://discord.com/api/oauth2/token';


  private requestDiscordToken(code:string){}


  discordLogin(){
    if(this.client_id){
      const state = this.generateRandomString(16);
      const scope = 'identify+connections+email+guilds'
      const queryParams = new HttpParams({
        fromObject: {
          response_type:  'code',
          client_id: this.client_id,
          scope: scope,
          state: state,
          redirect_uri: this.redirectUri,
        },
      });
      window.location.href = `${this.authorizeEndpoint}?${queryParams.toString()}`
    }
  }

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
}
