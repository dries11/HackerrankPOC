import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestDashboard } from '../pages/testDashboard/testDashboard';
import { CandidateInfoPage } from '../pages/candidateInfo/candidateInfo';
import { ProfilePage } from '../pages/profile/profile';
import { QuestionModal } from '../pages/questionModal/questionModal';
import { QuestionPage } from '../pages/question/question';

import { TestService } from '../services/testService';
import { TestCandidateService } from '../services/testCandidateService';

import { TagPipe } from '../services/tagPipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestDashboard,
    CandidateInfoPage,
    TagPipe,
    ProfilePage,
    QuestionModal,
    QuestionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestDashboard,
    CandidateInfoPage,
    ProfilePage,
    QuestionModal,
    QuestionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestService, TestCandidateService,
  ]
})
export class AppModule {}
