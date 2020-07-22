import { model, Schema } from 'mongoose'
import { IAnswer, IUser, IQuestion, IReport, IReportsModel } from './report.d'


const ReportSchema: Schema = new Schema(
    {
        user: { type: Object, required: true },
        questionsTemplateName: { type: String, required: true },
        answers: {
            type: Array,
            required: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    { timestamps: true }
);

ReportSchema.statics.startReportFromQuestions = function (user: IUser, questions: Array<IQuestion>): Promise<IReport> {
    const answers: Array<IAnswer> = questions.map(q => {
        return {
            question_slug: q.slug,
            id: q.id,
            text: '',
        }
    })

    const report = new this({
        user,
        answers,
        questionsTemplateName: 'daily',
    })

    return report.save()
}

ReportSchema.statics.getLastReportForUser = function (user: IUser): Promise<IReport> {
    return this.findOne({
        user
    }, {}, { sort: { 'createdAt': -1 } })
}




// animalSchema.query.byName = function(name) {
//     return this.where({ name: new RegExp(name, 'i') });
//   };

//     var text = 'search text';

// var criteria = {
//   "chapters.subChapters.Articles.description": { $regex: text, $options: 'i' }
// };

// Agreement.find(criteria, 'name displayName', function (err, docs) {
//   if (err)
//     console.log('error occured in the database');
//   console.log(docs);
// }); 

// ReportSchema.statics.updateReport = (report, questionToUpdate) => {
// this.findByIdAndUpdate
//     // return this.find({ 
//     //     name: new RegExp(name, 'i') 
//     // }, cb);
// }

// ReportSchema.statics.getAllReportsForUser = (user) => {
// this.find
//     // return this.find({ 
//     //     name: new RegExp(name, 'i') 
//     // }, cb);
// }



const ReportsModel = model<IReport, IReportsModel>('Report', ReportSchema);


export default ReportsModel
