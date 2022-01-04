import { Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Course } from '../course/entities/course.entity';
import { UserGender } from "./types/userGender.type";
import { UserRole } from "./types/userRole.type";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({
        type: 'varchar', // we need to change this to 'enum' in production
        enum: UserRole,
        default: UserRole.STUDENT,
        nullable: false,
    })
    role!: UserRole;

    @Column({ nullable: false, unique: true })
    email!: string;

    @Column({ nullable: true })
    password?: string;

    @Column({ nullable: false, unique: true })
    @Generated('uuid')
    slug!: string;

    @Column({ nullable: true })
    name?: string;

    @Column({ nullable: true })
    expertise?: string;

    @Column({ type: "date", nullable: true })
    dob?: Date;

    @Column({
        type: 'varchar', // we need to change this to 'enum' in production
        enum: UserGender,
        nullable: true,
    })
    gender?: UserGender;

    @Column({ nullable: true })
    country?: string;

    @Column({ nullable: true })
    avatar?: string;

    @Column({ nullable: true })
    mobile?: string;

    @Column({ type: 'text', nullable: true })
    bio?: string;

    @Column({ type: 'boolean', nullable: false, default: true })
    isActive!: boolean;

    @Column({ type: 'boolean', nullable: false, default: false })
    isVerified!: boolean;

    @OneToMany(() => Course, (course) => course.teacher)
    courses: Course[];
}