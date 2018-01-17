import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {LoaderService} from './service/loader.service';
import { routing } from './app.routes';
import {AuthGuardService} from './service/auth-guard.service';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { RoomComponent } from './component/room/room.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserAvatarComponent } from './component/user-avatar/user-avatar.component';
import { LoginComponent } from './component/login/login.component';
import { LoaderHttpInterceptor } from './util/loader-http-interceptor';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { LandingComponent } from './component/landing/landing.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorHttpInterceptor } from './util/error-http-interceptor';
import { JwtHttpInterceptor } from './util/jwt-http-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    NavbarComponent,
    UserAvatarComponent,
    LoginComponent,
    PageNotFoundComponent,
    LandingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [UserService, LoaderService, AuthGuardService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderHttpInterceptor,
    multi: true
  },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
