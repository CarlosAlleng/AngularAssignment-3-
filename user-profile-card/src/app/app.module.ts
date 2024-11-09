import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent // Declare UserProfileComponent here
  ],
  imports: [
    BrowserModule // Keep necessary Angular modules here
  ],
  bootstrap: [AppComponent] // Set AppComponent as the bootstrap component
})
export class AppModule {}




