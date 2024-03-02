import { TestBed } from '@angular/core/testing';

import { DiscordOAuthService } from './discord-o-auth.service';

describe('DiscordAuthService', () => {
  let service: DiscordOAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscordOAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
