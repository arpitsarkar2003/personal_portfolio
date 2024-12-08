"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { work } from "../../lib/work-exp";

const formatDuration = (startDateStr: string, endDateStr: string = new Date().toLocaleDateString()) => {
    const start = new Date(startDateStr);
    const end = new Date(endDateStr);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    if (years === 0 && months === 0) {
        return "Less than a month";
    }

    if (years === 0) {
        return `${months} month${months > 1 ? 's' : ''}`;
    }

    const yearsText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
    const monthsText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';

    return [yearsText, monthsText].filter(Boolean).join(' and ');
};

const sortedWork = work.sort((a, b) => {
    const dateA = new Date(a.date.split(' - ')[1] || a.date.split(' - ')[0]);
    const dateB = new Date(b.date.split(' - ')[1] || b.date.split(' - ')[0]);
    return dateB.getTime() - dateA.getTime();
});

sortedWork.forEach(item => {
    const [startDate, endDate] = item.date.split(' - ');
    // @ts-ignore
    item.time = formatDuration(startDate, endDate || new Date().toLocaleDateString());
});

const Work = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-2">My Work Experiences</h1>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </motion.div>
            <div className="grid grid-cols-1 gap-8">
                {sortedWork.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="overflow-hidden">
                            <CardHeader className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 pb-2">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.company_logo}
                                        alt={`${item.name_company} logo`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <CardTitle className="text-2xl">{item.name_company}</CardTitle>
                                    <p className="text-lg text-muted-foreground">{item.role}</p>
                                </div>
                                <div className="flex flex-col items-end">
                                    <Badge variant="outline" className="mb-2">{item.date}</Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">{item.description}</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    {item.achievements.map((achievement, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                            className="text-sm"
                                        >
                                            {achievement}
                                        </motion.li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Work;

