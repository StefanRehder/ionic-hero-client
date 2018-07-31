import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-hero-form',
  templateUrl: './create-hero-form.html'
})
export class CreateHeroFormComponent implements OnInit {
  public createHeroForm: FormGroup;
  protected statusMessage: string;

  constructor(private heroService: HeroServiceProvider) { }

  public ngOnInit() {
      this.createHeroForm = new FormGroup({
          name: new FormControl(),
          strength: new FormControl()
      });
  }

  public onSubmit() {
      this.heroService.createHero(this.createHeroForm.value)
        .then(_ => {
          this.createHeroForm.reset();
        })
        .catch((err: HttpErrorResponse) => {
          switch (err.status) {
            case 400: {
                this.statusMessage = 'Bad Request';
                break;
            }
            default: {
                this.statusMessage = err.message;
                break;
            }
          }
        }
      );
  }
}