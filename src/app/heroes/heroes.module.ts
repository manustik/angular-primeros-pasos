import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CounterComponent } from '../counter/counter.component';

@NgModule({
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent, CounterComponent],
  declarations: [HeroComponent, ListComponent, CounterComponent],
})
export class HeroesModule {}
