import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../students.service';
import {
  ActionSheetController,
  AlertController,
  ToastController,
} from '@ionic/angular';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.page.html',
  styleUrls: ['./roster.page.scss'],
})
export class RosterPage implements OnInit {
  students: Student[] = [];
  deletedStudents: Student[] = [];

  constructor(
    private studentService: StudentsService,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.students = this.studentService.getAll();
  }

  studentUrl(student: Student) {
    return `/student/${student.id}`;
  }

  async deleteStudent(student: Student) {
    this.students = this.students.filter((x) => x.id !== student.id);
    this.deletedStudents.push(student);

    const alert = await this.toastController.create({
      message: `${student.firstName} ${student.lastName} deleted.`,
      position: 'middle',
      duration: 5000,
      color: 'success',
      buttons: [
        {
          text: 'Done',
          role: 'cancel',
        },
        {
          text: 'Undo',
          handler: () => {
            this.undoDelete();
          },
        },
      ],
    });
    await alert.present();
  }

  async presentActionSheet(student: Student) {
    const actionSheet = await this.actionSheetController.create({
      header: `${student.firstName} ${student.lastName}`,
      buttons: [
        {
          text: 'Mark Present',
          icon: 'checkmark-circle-outline',
          handler: () => {
            student.status = 'present';
          },
        },
        {
          text: 'Mark Absent',
          icon: 'close-circle-outline',
          handler: () => {
            student.status = 'absent';
          },
        },
        {
          text: 'Delete',
          icon: 'trash',
          role: 'destructive',
          handler: () => {
            this.deleteStudent(student);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentDeleteAlert(student: Student) {
    const alert = await this.alertController.create({
      header: 'Delete this student?',
      subHeader: `${student.firstName} ${student.lastName}`,
      message: 'This operation cannot be undone',
      buttons: [
        { text: 'Delete', handler: () => this.deleteStudent(student) },
        { text: 'Never mind', role: 'cancel' },
      ],
    });

    await alert.present();
  }

  async undoDelete() {
    if (this.deletedStudents.length > 0) {
      let lastDeleted = this.deletedStudents.pop();
      this.students.push(lastDeleted);
    }
  }

  async sortOrder() {
    const sortedStudents: Student[] = this.students.sort((a, b) => {
      let kA = a.lastName,
        kB = b.lastName;
      if (kA < kB) return -1;
      if (kA > kB) return 1;
      return 0;
    });
    this.students = sortedStudents;
  }
}
