import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WidgetServiceService } from '../services/widget-service.service';

@Component({
  selector: 'app-widget-forms',
  templateUrl: './widget-forms.component.html',
  styleUrls: ['./widget-forms.component.css']
})
export class WidgetFormsComponent implements OnInit {
  forms: FormGroup[] = [];
  totalPrice: number = 0;
  widgetRes: any[] = [];
  itemName: string = '';
  formsCount: number = 0;


  constructor(private fb: FormBuilder,
    private widgetService: WidgetServiceService) { }


  ngOnInit(): void {
    // for (let i = 0; i < 6; i++) {
    //   this.forms.push(this.createForm());
    // }

    this.widgetService.getWidget().subscribe(data => {
      console.log("data", data)
      this.widgetRes = Object.values(data);
      this.formsCount = this.widgetRes.length;

      console.log("widgetRes", this.widgetRes)
      for (let item of this.widgetRes) {
        console.log("item-price", item.price)
        this.itemName = item.name;
        this.forms.push(this.createForm(item));
      }
      this.calculateTotalPrice();
    });


    console.log("Total price", this.totalPrice)
  }

  createForm(item: any): FormGroup {
    return this.fb.group({
      name: [item.name || '', Validators.required],
      color: [item.color || '', Validators.required],
      price: [item.price || '', Validators.required],
      id: [item.id || '', Validators.required]
    });
  }

  deleteForm(index: number, id: number) {
    this.widgetService.deleteWidget(id).subscribe((res) => {
      console.log('Item deleted successfully:', [res]);
      this.forms.splice(index, 1);
      this.calculateTotalPrice();
    },
      error => {
        // Handle error
        console.error('Error deleting item:', error);
      });
  }

  calculateTotalPrice() {
    this.totalPrice = this.forms.reduce((total, form) => total + +form.value.price, 0);
  }

  addForm() {

  }

}
