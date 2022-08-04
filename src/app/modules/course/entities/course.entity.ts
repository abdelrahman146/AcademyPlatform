import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { CourseType } from '../types/CourseType.enum';


@Entity()
export class Course {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar', // we need to change this to 'enum' in production
        enum: CourseType,
        default: CourseType.RECORDED,
        nullable: false,
    })
    type!: CourseType;

    @Column({ nullable: false, unique: true })
    slug!: string;

    @Column({ nullable: false })
    title!: string;

    @Column({ nullable: true })
    headline?: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ nullable: true })
    image?: string;

    @Column({ nullable: true })
    introVideo?: string;

    @Column({ type: 'date', nullable: true })
    startingDate?: Date;

    @Column({ type: 'date', nullable: true })
    endingDate?: Date;

    @Column({ type: 'int', default: 0, nullable: false })
    price: number;

    @Column({ type: 'boolean', default: false })
    isPublished: true;

    @ManyToOne(() => User, (user) => user.courses, { nullable: false })
    teacher: User;

    @ManyToMany(() => User)
    students: User[];

}