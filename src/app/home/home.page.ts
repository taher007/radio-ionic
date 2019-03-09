import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { RadioPlayer } from "../radio.player";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  providers: [RadioPlayer]
})
export class HomePage {
  private player: RadioPlayer;
  private isPlaying = false;

  constructor(platform: Platform, player: RadioPlayer) {
    this.player = player;
  }

  play() {
    if (!this.isPlaying) {
      this.player.play().then(() => {
        this.isPlaying = true;
        console.log("Playing");
      });
    }
    console.log("Playing before");
  }

  pause() {
    if (this.isPlaying) {
      this.player.pause();
      this.isPlaying = false;
      console.log("Stoping");
    }
  }
}
