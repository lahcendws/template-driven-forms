import { group } from '@angular/animations';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';



export function isRequiredValidator(c:AbstractControl): ValidationErrors | null {

 if(c.get("identifiant")?.value || c.get("titre")?.value){
   return null;
 }else {
   return {'isRequired':true};
 }
 
}
export function rangeDateValidator(dateMin: number, currentDate: number ): ValidatorFn {
  return (c: AbstractControl):ValidationErrors | null  => {
      
      if (dateMin > c.get("sortie")?.value && c.get("sortie")?.value <= currentDate) {
        return  {'min':dateMin,currentDate };
        
      }
     return null;
      
  };
}
@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {
  public searchMovie:FormGroup;
   
  constructor(private fb:FormBuilder) { }
ngOnInit(): void {
  const today = new Date();
  const todayYear = today.getFullYear();
   this.searchMovie=this.fb.group({
     identifiant:['', [isRequiredValidator]],
     titre:['',Validators.required],
     type:[''],
     fiche:[''],  
   //"sortie": new FormControl('', rangeDateValidator(1900,todayYear))
     sortie:[null,rangeDateValidator(1900,todayYear)]
   },{validators:[rangeDateValidator(1900,todayYear),isRequiredValidator]}); 
   this.searchMovie.patchValue({
    type:'series',
   fiche:'courte'
  });
    
   
}
onSubmit():void {
  console.log(JSON.stringify(this.searchMovie.value));
}

}
