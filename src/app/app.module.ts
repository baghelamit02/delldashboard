import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SalesOverviewComponent } from './dashboard/sales-overview/sales-overview.component';
import { HeadMapComponent } from './dashboard/head-map/head-map.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ChatbotComponent } from './shared/chatbot/chatbot/chatbot.component';
import { CardComponent } from './shared/card/card/card.component';
import { TwocardsComponent } from './shared/card/twocards/twocards.component';
import { OutputGraphComponent } from './shared/charts/output-graph/output-graph.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreachartComponent } from './shared/charts/areachart/areachart/areachart.component';
import { AreasplineComponent } from './shared/charts/areachart/areaspline/areaspline.component';
import { PercentageareaComponent } from './shared/charts/percentagearea/percentagearea.component';
import { PiechartComponent } from './shared/charts/piechart/piechart.component';
import { StackedcolumnComponent } from './shared/charts/stackedcolumn/stackedcolumn.component';
import { SearchComponent } from './dashboard/search/search/search.component';
import { MenuComponent } from './shared/menu/menu/menu.component';
import { MapComponent } from './shared/charts/map/map/map.component';
import { DrilldownComponent } from './shared/charts/drilldown/drilldown/drilldown.component';
import { IpiechartComponent } from './shared/charts/ipiechart/ipiechart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SalesOverviewComponent,
    HeadMapComponent,
    FooterComponent,
    ChatbotComponent,
    CardComponent,
    TwocardsComponent,
    OutputGraphComponent,
    AreachartComponent,
    AreasplineComponent,
    PercentageareaComponent,
    PiechartComponent,
    StackedcolumnComponent,
    SearchComponent,
    MenuComponent,
    MapComponent,
    DrilldownComponent,
    IpiechartComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
