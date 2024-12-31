import { Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { NavAndTabComponent } from './nav-and-tab/nav-and-tab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PlaceholdersComponent } from './placeholders/placeholders.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { ScrollspyComponent } from './scrollspy/scrollspy.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { ToastsComponent } from './toasts/toasts.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { FormElementComponent } from './form-element/form-element.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path: 'accordion', component: AccordionComponent},
    {path: 'alerts', component: AlertsComponent},
    {path: 'badge', component: BadgeComponent},
    {path: 'breadcrumbs', component: BreadcrumbsComponent},
    {path: 'buttons', component: ButtonsComponent},
    {path: 'cards', component: CardsComponent},
    {path: 'carousel', component: CarouselComponent},
    {path: 'collapse', component: CollapseComponent},
    // {path: 'dropdown', component: DropdownComponent},
    {path: 'list-group', component: ListComponent},
    {path: 'modal', component: ModalComponent},
    {path: 'tabs', component: NavAndTabComponent},
    {path: 'navbar', component: NavbarComponent},
    {path: 'pagination', component: PaginationComponent},
    {path: 'placeholders', component: PlaceholdersComponent},
    // {path: 'popovers', component: PopoversComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'scrollspy', component: ScrollspyComponent},
    {path: 'spinners', component: SpinnersComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'form-elements', component: FormElementComponent},
    {path: 'form-layouts', component: FormLayoutComponent},
    {path: 'form-validations', component: FormValidationComponent},
    // {path: 'toasts', component: ToastsComponent},
    // {path: 'tooltips', component: TooltipsComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'},

    
];
