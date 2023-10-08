////@angular:

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

///navegadores  Componentes
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ThemeComponent } from './theme/theme.component';
import { HomeComponent } from './home/home.component';
import { MatrizesComponent } from './matrizes/matrizes.component';
import { ActorComponent } from './actor/actor.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ActoresComponent } from './actores/actores.component';
import { LinkItemComponent } from './link-item/link-item.component';
import { LinkListComponent } from './link-list/link-list.component';
import { CreateLinkComponent } from './create-link/create-link.component';
import { MatrizComponent } from './matriz/matriz.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

///angular material 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule, } from "@angular/material/list";


///apollo
import { GraphQLModule } from "./apollo.config";


///auth
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

///prime ng
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TreeTableModule } from 'primeng/treetable';
import { RatingModule } from 'primeng/rating';


///syncfusion
import { PivotViewModule } from '@syncfusion/ej2-angular-pivotview';
import { HeatMapModule } from '@syncfusion/ej2-angular-heatmap';
import { CheckBoxAllModule } from "@syncfusion/ej2-angular-buttons";
import { DatePickerAllModule } from "@syncfusion/ej2-angular-calendars";
import { NumericTextBoxAllModule } from "@syncfusion/ej2-angular-inputs";
import { TreeGridModule, PageService, SortService, FilterService, EditService, ToolbarService } from "@syncfusion/ej2-angular-treegrid";


///modulos
import { DemoMaterialModule } from '../material-module';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ActorComponent,
    DialogBoxComponent,
    ThemeComponent,
    ActoresComponent,
    LinkItemComponent,
    LinkListComponent,
    CreateLinkComponent,
    MatrizComponent,
    LoginComponent,
    MatrizesComponent,
    RegisterComponent,
    SidenavListComponent,
  ],
  imports: [
    FlexLayoutModule,
    DatePickerAllModule,
    CheckBoxAllModule,
    NumericTextBoxAllModule,
    TreeGridModule,
    BrowserModule,
    MatExpansionModule,
    DemoMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GraphQLModule,
    PivotViewModule,
    HeatMapModule,
    MatButtonToggleModule,
    TableModule,
    ConfirmDialogModule,
    MatCheckboxModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    MatCardModule,
    CarouselModule,
    ToastModule,
    TabViewModule,
    CodeHighlighterModule,
    DataViewModule,
    DialogModule,
    DropdownModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    TreeTableModule,
    RatingModule
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [PageService, SortService, FilterService, EditService, ToolbarService, ConfirmationService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
