import { Component } from '@angular/core';

@Component({
  selector: 'jhi-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
})
export class TreeviewComponent {
  public hierarchicalData: Object[] = [
    {
      id: '01',
      name: '1.1 Marketing',
      expanded: true,
      subChild: [
        {
          id: '1.1-01',
          name: 'Initial Data Entry',
          subChild: [
            { id: '01-01-01', name: '7-Zip' },
            { id: '01-01-02', name: 'Git' },
            { id: '01-01-03', name: 'IIS Express' },
          ],
        },
        {
          id: '01-02',
          name: 'Prescreening',
          expanded: true,
          subChild: [
            { id: '01-02-01', name: 'Smith' },
            { id: '01-02-02', name: 'Public' },
          ],
        },
      ],
    },
    {
      id: '02',
      name: 'Appraisal',
      subChild: [
        {
          id: '02-01',
          name: 'Personals',
          subChild: [
            { id: '02-01-01', name: 'My photo.png' },
            { id: '02-01-02', name: 'Rental document.docx' },
            { id: '02-01-03', name: 'Pay slip.pdf' },
          ],
        },
        {
          id: '02-02',
          name: 'Projects',
          subChild: [
            { id: '02-02-01', name: 'ASP Application' },
            { id: '02-02-02', name: 'TypeScript Application' },
            { id: '02-02-03', name: 'React Application' },
          ],
        },
        {
          id: '02-03',
          name: 'Office',
          subChild: [
            { id: '02-03-01', name: 'Work details.docx' },
            { id: '02-03-02', name: 'Weekly report.docx' },
            { id: '02-03-03', name: 'Wish list.csv' },
          ],
        },
      ],
    },
    {
      id: '03',
      name: 'Analisa Credit',
      icon: 'folder',
      subChild: [
        {
          id: '03-01',
          name: 'Pictures',
          subChild: [
            { id: '03-01-01', name: 'Wind.jpg' },
            { id: '03-01-02', name: 'Stone.jpg' },
            { id: '03-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '03-02',
          name: 'Documents',
          subChild: [
            { id: '03-02-01', name: 'Environment Pollution.docx' },
            { id: '03-02-02', name: 'Global Warming.ppt' },
            { id: '03-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '03-03',
          name: 'Study Materials',
          subChild: [
            { id: '03-03-01', name: 'UI-Guide.pdf' },
            { id: '03-03-02', name: 'Tutorials.zip' },
            { id: '03-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
    {
      id: '04',
      name: 'Approval',
      icon: 'folder',
      subChild: [
        {
          id: '04-01',
          name: 'Pictures',
          subChild: [
            { id: '04-01-01', name: 'Wind.jpg' },
            { id: '04-01-02', name: 'Stone.jpg' },
            { id: '04-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '04-02',
          name: 'Documents',
          subChild: [
            { id: '04-02-01', name: 'Environment Pollution.docx' },
            { id: '04-02-02', name: 'Global Warming.ppt' },
            { id: '04-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '04-03',
          name: 'Study Materials',
          subChild: [
            { id: '04-03-01', name: 'UI-Guide.pdf' },
            { id: '04-03-02', name: 'Tutorials.zip' },
            { id: '04-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
    {
      id: '05',
      name: 'Offering Letter',
      icon: 'folder',
      subChild: [
        {
          id: '05-01',
          name: 'Pictures',
          subChild: [
            { id: '05-01-01', name: 'Wind.jpg' },
            { id: '05-01-02', name: 'Stone.jpg' },
            { id: '05-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '05-02',
          name: 'Documents',
          subChild: [
            { id: '05-02-01', name: 'Environment Pollution.docx' },
            { id: '05-02-02', name: 'Global Warming.ppt' },
            { id: '05-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '05-03',
          name: 'Study Materials',
          subChild: [
            { id: '05-03-01', name: 'UI-Guide.pdf' },
            { id: '05-03-02', name: 'Tutorials.zip' },
            { id: '05-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
    {
      id: '06',
      name: 'Legal',
      icon: 'folder',
      subChild: [
        {
          id: '06-01',
          name: 'Pictures',
          subChild: [
            { id: '06-01-01', name: 'Wind.jpg' },
            { id: '06-01-02', name: 'Stone.jpg' },
            { id: '06-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '06-02',
          name: 'Documents',
          subChild: [
            { id: '06-02-01', name: 'Environment Pollution.docx' },
            { id: '06-02-02', name: 'Global Warming.ppt' },
            { id: '06-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '06-03',
          name: 'Study Materials',
          subChild: [
            { id: '06-03-01', name: 'UI-Guide.pdf' },
            { id: '06-03-02', name: 'Tutorials.zip' },
            { id: '06-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
    {
      id: '07',
      name: 'Disbursment',
      icon: 'folder',
      subChild: [
        {
          id: '07-01',
          name: 'Pictures',
          subChild: [
            { id: '07-01-01', name: 'Wind.jpg' },
            { id: '07-01-02', name: 'Stone.jpg' },
            { id: '07-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '07-02',
          name: 'Documents',
          subChild: [
            { id: '07-02-01', name: 'Environment Pollution.docx' },
            { id: '07-02-02', name: 'Global Warming.ppt' },
            { id: '07-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '07-03',
          name: 'Study Materials',
          subChild: [
            { id: '07-03-01', name: 'UI-Guide.pdf' },
            { id: '07-03-02', name: 'Tutorials.zip' },
            { id: '07-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
    {
      id: '08',
      name: 'MIS Report',
      icon: 'folder',
      subChild: [
        {
          id: '03-01',
          name: 'Pictures',
          subChild: [
            { id: '03-01-01', name: 'Wind.jpg' },
            { id: '03-01-02', name: 'Stone.jpg' },
            { id: '03-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '03-02',
          name: 'Documents',
          subChild: [
            { id: '03-02-01', name: 'Environment Pollution.docx' },
            { id: '03-02-02', name: 'Global Warming.ppt' },
            { id: '03-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '03-03',
          name: 'Study Materials',
          subChild: [
            { id: '03-03-01', name: 'UI-Guide.pdf' },
            { id: '03-03-02', name: 'Tutorials.zip' },
            { id: '03-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
    {
      id: '03',
      name: 'Inquiry',
      icon: 'folder',
      subChild: [
        {
          id: '03-01',
          name: 'Pictures',
          subChild: [
            { id: '03-01-01', name: 'Wind.jpg' },
            { id: '03-01-02', name: 'Stone.jpg' },
            { id: '03-01-03', name: 'Home.jpg' },
          ],
        },
        {
          id: '03-02',
          name: 'Documents',
          subChild: [
            { id: '03-02-01', name: 'Environment Pollution.docx' },
            { id: '03-02-02', name: 'Global Warming.ppt' },
            { id: '03-02-03', name: 'Social Network.pdf' },
          ],
        },
        {
          id: '03-03',
          name: 'Study Materials',
          subChild: [
            { id: '03-03-01', name: 'UI-Guide.pdf' },
            { id: '03-03-02', name: 'Tutorials.zip' },
            { id: '03-03-03', name: 'TypeScript.7z' },
          ],
        },
      ],
    },
  ];
  // maps the appropriate column to fields property
  public field: Object = {
    dataSource: this.hierarchicalData,
    id: 'id',
    text: 'name',
    child: 'subChild',
  };
  // set the Multi Selection option to TreeView
  public cssClass: String = 'custom';
}
