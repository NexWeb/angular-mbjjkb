import {Component, OnInit} from '@angular/core';

@Component({ 
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]  
})

export class AppComponent implements OnInit {

ngOnInit(): void {
    $(document).ready(() => {
     	$("#callGo").on('click', function(event) {
					 event.preventDefault();
					var amount = $("#amount").val();
					$.ajax({
					   url: "https://go.javawebapp.com/callme",
						type: "POST",
						data: {'amount': amount},
						success: function(data) {
							var obj = $.parseJSON(data);
						    $("#token").val(obj['token']);
							if($("#token").val() !=''){
							$("#response").html(JSON.stringify(obj['messages']));
								$("#payform").show();
								} else {
							$("#response").html(JSON.stringify(obj['messages']));
							}
						},
					});
				});
    });
  }
}