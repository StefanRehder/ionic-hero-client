import { NgModule } from '@angular/core';
import { CreateHeroFormComponent } from './create-hero-form/create-hero-form';
import { HeroDetailsComponent } from './hero-details/hero-details';
import { HeroListElementComponent } from './hero-list-element/hero-list-element';

@NgModule({
	declarations: [
        CreateHeroFormComponent,
        HeroDetailsComponent,
        HeroListElementComponent
    ],
    imports: [],
    exports: [
        CreateHeroFormComponent,
        HeroDetailsComponent,
        HeroListElementComponent
    ]
})
export class ComponentsModule {}
