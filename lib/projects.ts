export interface Project {
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string
  problem: string
  solution: string
  impact: string
  tools: string[]
  github?: string
  live?: string
  featured: boolean
  year: string
  diagramType: 'etl' | 'realtime' | 'batch' | 'analytics' | 'spark' | 'water'
}

export const projects: Project[] = [
  {
    slug: 'youtube-data-analysis',
    title: 'End-to-End YouTube Data Analysis Pipeline',
    category: 'Cloud Data Engineering',
    shortDescription: 'Scalable AWS-native pipeline ingesting, transforming, and analyzing YouTube trending data across multiple regions.',
    description: 'Designed and implemented a scalable end-to-end data engineering pipeline to analyze YouTube trending video data across multiple regions. The project involved data ingestion, ETL processing, cloud-based storage, and analytics using AWS services.',
    problem: 'Analyzing large-scale YouTube trending data from multiple regions presents challenges due to high data volume, inconsistent formats (structured + semi-structured JSON), and the need for scalable processing infrastructure that can handle regional data at speed.',
    solution: 'Built a cloud-native data engineering solution on AWS that automates the full data lifecycle — from raw ingestion via S3 to cataloging with Glue, event-driven transformation via Lambda, serverless querying with Athena, and reporting dashboards. The pipeline handles both structured CSV and semi-structured JSON seamlessly.',
    impact: 'Created a scalable cloud-native pipeline capable of processing large YouTube datasets efficiently, improving data accessibility, analytics performance, and enabling trend analysis and audience engagement reporting for data-driven content strategy decisions.',
    tools: ['Python', 'AWS S3', 'AWS Glue', 'AWS Lambda', 'AWS Athena', 'SQL', 'ETL Pipelines'],
    github: 'https://github.com/Stephen-delAyo/DE-PROJECTS/tree/main/END-TO-END%20DE%20PROJECT-%20YouTube%20Data%20Analysis',
    featured: true,
    year: '2024',
    diagramType: 'etl',
  },
  {
    slug: 'uber-data-analytics',
    title: 'Uber Data Analytics | GCP End-to-End Platform',
    category: 'Cloud Data Engineering',
    shortDescription: 'Cloud-based GCP pipeline transforming raw Uber trip data into structured star-schema models for BI and analytics.',
    description: 'Developed a cloud-based end-to-end data engineering solution for analyzing Uber trip data using Python, SQL, Google Cloud Platform (GCP), Mage AI, BigQuery, and Looker Studio.',
    problem: 'Raw transportation data is difficult to analyze at scale due to high data volume, inconsistent formatting, and inefficient reporting processes that leave business insights locked in raw tables.',
    solution: 'Built an automated cloud-native pipeline on GCP — ingesting raw trip data into Cloud Storage, orchestrating transformation with Mage AI, modeling into fact and dimension tables in BigQuery, and surfacing analytics in Looker Studio dashboards.',
    impact: 'Enabled scalable analytics and interactive business reporting by automating ETL workflows and structuring Uber trip data for high-performance querying, supporting data-driven operational and strategic decisions.',
    tools: ['Python', 'SQL', 'GCP', 'Google Cloud Storage', 'Mage AI', 'BigQuery', 'Looker Studio'],
    github: 'https://github.com/Stephen-delAyo/DE-PROJECTS/tree/uber-de-project/Uber-Data-Analytics%20-End-To-End-Data-Engineering-Project',
    featured: true,
    year: '2024',
    diagramType: 'batch',
  },
  {
    slug: 'realtime-aws-snowflake',
    title: 'Real-Time Data Pipeline: AWS + Snowflake',
    category: 'Real-Time Data Engineering',
    shortDescription: 'Event-driven real-time pipeline ingesting live weather data through DynamoDB Streams into Snowflake via Snowpipe.',
    description: 'Designed and implemented a real-time cloud-based data pipeline using AWS services and Snowflake to process live weather data with near-zero latency.',
    problem: 'Processing and analyzing real-time streaming data is challenging due to scalability requirements, event-driven processing needs, and the integration complexity between cloud services and data warehouses.',
    solution: 'Built an automated, serverless real-time pipeline: AWS Lambda for scheduled API ingestion → DynamoDB for real-time storage → DynamoDB Streams for event-driven trigger → S3 as staging → Snowpipe for continuous auto-loading → Snowflake for analytics.',
    impact: 'Enabled near real-time processing and analytics of live weather data through an automated cloud-native pipeline, reducing data latency to under 60 seconds and demonstrating modern streaming data engineering architecture.',
    tools: ['AWS Lambda', 'DynamoDB', 'DynamoDB Streams', 'Amazon S3', 'Snowflake', 'Snowpipe', 'Python', 'SQL'],
    github: 'https://github.com/Stephen-delAyo/DE-PROJECTS/tree/real-time-data-pipeline-aws-snowflake/real-time-data-pipeline-aws-snowflake',
    featured: true,
    year: '2024',
    diagramType: 'realtime',
  },
  {
    slug: 'fitness-tracker-spark',
    title: 'Fitness Tracker Big Data Pipeline',
    category: 'Big Data Engineering',
    shortDescription: 'Distributed Spark + Scala pipeline processing large-scale fitness tracker data to uncover user activity trends.',
    description: 'Built a scalable data engineering solution to process and analyze fitness tracker data using Apache Spark and Scala, performing distributed data processing and analysis of user activity patterns.',
    problem: 'Fitness companies struggle to derive meaningful insights from large volumes of raw user activity data due to scalability challenges and inconsistent data formats that traditional tools cannot handle efficiently.',
    solution: 'Developed a distributed big data processing pipeline using Apache Spark and Scala — ingesting raw CSV data into DataFrames, performing distributed cleaning and transformation, analyzing calorie consumption and activity patterns, and generating business insights.',
    impact: 'Improved the ability to analyze large-scale fitness datasets efficiently, uncovered user activity trends and engagement patterns, and supported data-driven strategies for personalized fitness programs and customer retention.',
    tools: ['Apache Spark', 'Scala', 'SQL', 'Docker', 'IntelliJ IDEA'],
    github: 'https://github.com/Stephen-delAyo/DE-PROJECTS/tree/analysis-on-fitness-tracker/fitness-tracker-de-project',
    featured: true,
    year: '2023',
    diagramType: 'spark',
  },
  {
    slug: 'enhancing-drinking-water-data',
    title: 'Enhancing Drinking Water Accessibility Data',
    category: 'Data Analytics',
    shortDescription: 'Regional analysis of WHO/UNICEF water service levels from 2000–2020, identifying disparities and SDG 6 gaps.',
    description: 'Analyzed global drinking water accessibility data using the WHO/UNICEF JMP dataset to evaluate household access to safe water services from 2020 onward, focusing on regional disparities.',
    problem: 'Many regions face unequal access to clean drinking water, making it difficult for policymakers to accurately assess service gaps and track progress toward global sustainability targets with reliable data.',
    solution: 'Used statistical analysis, spreadsheet modeling, and visualization to evaluate water service levels across regions, create comparative benchmarks, and identify gaps between basic, limited, and safely managed water services.',
    impact: 'Highlighted regional disparities in water accessibility, improved visibility into global water service trends from 2000–2020, and supported evidence-based strategies for advancing equitable clean water access.',
    tools: ['Statistics', 'Data Visualization', 'Spreadsheet'],
    live: '#',
    featured: false,
    year: '2022',
    diagramType: 'water',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured)
}
