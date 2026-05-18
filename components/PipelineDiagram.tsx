'use client'

import { motion } from 'framer-motion'

// ETL Pipeline diagram (YouTube project)
export function ETLDiagram() {
  const nodes = [
    { x: 60, y: 110, label: 'YouTube API\n/ S3 Raw', color: '#FF9900', icon: '📥' },
    { x: 220, y: 110, label: 'AWS Glue\nCatalog', color: '#FF9900', icon: '🗂️' },
    { x: 380, y: 60, label: 'AWS Lambda\nTransform', color: '#00C4A7', icon: '⚡' },
    { x: 380, y: 160, label: 'AWS Glue\nETL Job', color: '#00C4A7', icon: '🔄' },
    { x: 540, y: 110, label: 'S3 Curated\nLayer', color: '#60A5FA', icon: '🗄️' },
    { x: 700, y: 110, label: 'AWS Athena\nQuery', color: '#A78BFA', icon: '🔍' },
    { x: 850, y: 110, label: 'Dashboard\n/ Reports', color: '#F59E0B', icon: '📊' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 960 200" className="w-full min-w-[640px]" style={{ maxHeight: '200px' }}>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,245,212,0.5)" />
          </marker>
        </defs>
        {/* Connections */}
        <line x1="120" y1="110" x2="190" y2="110" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="280" y1="110" x2="350" y2="75" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="280" y1="110" x2="350" y2="160" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="440" y1="75" x2="510" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="440" y1="160" x2="510" y2="125" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="600" y1="110" x2="670" y2="110" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="760" y1="110" x2="820" y2="110" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {nodes.map((node, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
          >
            <rect x={node.x - 50} y={node.y - 30} width="100" height="60" rx="10"
              fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1" />
            <text x={node.x} y={node.y - 8} textAnchor="middle" fontSize="18">{node.icon}</text>
            {node.label.split('\n').map((line, li) => (
              <text key={li} x={node.x} y={node.y + 12 + li * 13} textAnchor="middle"
                fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="DM Sans, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// Real-time pipeline diagram (AWS + Snowflake)
export function RealtimeDiagram() {
  const nodes = [
    { x: 80, y: 100, label: 'Weather\nAPI', color: '#60A5FA', icon: '🌤️' },
    { x: 240, y: 100, label: 'AWS Lambda\n(Scheduled)', color: '#FF9900', icon: '⚡' },
    { x: 400, y: 100, label: 'DynamoDB\n(Live Store)', color: '#FF9900', icon: '⚡' },
    { x: 560, y: 100, label: 'DynamoDB\nStreams', color: '#00F5D4', icon: '🔁' },
    { x: 700, y: 55, label: 'Amazon S3\n(Stage)', color: '#FF9900', icon: '🗄️' },
    { x: 700, y: 145, label: 'Snowpipe\n(Auto-load)', color: '#29B5E8', icon: '❄️' },
    { x: 860, y: 100, label: 'Snowflake\nAnalytics', color: '#29B5E8', icon: '📊' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 980 200" className="w-full min-w-[640px]" style={{ maxHeight: '200px' }}>
        <defs>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,245,212,0.5)" />
          </marker>
        </defs>
        <line x1="140" y1="100" x2="205" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <line x1="305" y1="100" x2="365" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <line x1="465" y1="100" x2="525" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <line x1="620" y1="90" x2="665" y2="65" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <line x1="620" y1="110" x2="665" y2="140" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <line x1="760" y1="65" x2="825" y2="90" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />
        <line x1="760" y1="145" x2="825" y2="115" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow2)" />

        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <rect x={node.x - 55} y={node.y - 32} width="110" height="64" rx="10"
              fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1" />
            <text x={node.x} y={node.y - 10} textAnchor="middle" fontSize="18">{node.icon}</text>
            {node.label.split('\n').map((line, li) => (
              <text key={li} x={node.x} y={node.y + 10 + li * 13} textAnchor="middle"
                fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="DM Sans, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}

        {/* Pulse animation on streams node */}
        <motion.circle cx="560" cy="100" r="35"
          animate={{ r: [35, 45, 35], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          fill="rgba(0,245,212,0.08)" />
      </svg>
    </div>
  )
}

// GCP/Uber batch pipeline
export function BatchDiagram() {
  const nodes = [
    { x: 75, y: 100, label: 'Raw Data\nSource', color: '#60A5FA', icon: '📂' },
    { x: 230, y: 100, label: 'GCS Bucket\n(Raw Layer)', color: '#4285F4', icon: '☁️' },
    { x: 390, y: 100, label: 'Mage AI\nOrchestrate', color: '#7C3AED', icon: '🔮' },
    { x: 550, y: 100, label: 'BigQuery\nWarehouse', color: '#4285F4', icon: '📊' },
    { x: 710, y: 60, label: 'Fact &\nDim Tables', color: '#00F5D4', icon: '🗃️' },
    { x: 710, y: 140, label: 'Looker\nStudio BI', color: '#F59E0B', icon: '📈' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 860 200" className="w-full min-w-[580px]" style={{ maxHeight: '200px' }}>
        <defs>
          <marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,245,212,0.5)" />
          </marker>
        </defs>
        <line x1="135" y1="100" x2="195" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow3)" />
        <line x1="295" y1="100" x2="355" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow3)" />
        <line x1="455" y1="100" x2="515" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow3)" />
        <line x1="615" y1="90" x2="665" y2="70" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow3)" />
        <line x1="615" y1="110" x2="665" y2="135" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow3)" />

        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <rect x={node.x - 55} y={node.y - 30} width="110" height="60" rx="10"
              fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1" />
            <text x={node.x} y={node.y - 8} textAnchor="middle" fontSize="18">{node.icon}</text>
            {node.label.split('\n').map((line, li) => (
              <text key={li} x={node.x} y={node.y + 12 + li * 13} textAnchor="middle"
                fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="DM Sans, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// Spark processing diagram
export function SparkDiagram() {
  const nodes = [
    { x: 75, y: 100, label: 'CSV Input\nFiles', color: '#60A5FA', icon: '📁' },
    { x: 240, y: 100, label: 'Spark\nDataFrames', color: '#E16A00', icon: '⚡' },
    { x: 400, y: 70, label: 'Cleanse &\nTransform', color: '#00F5D4', icon: '🔧' },
    { x: 400, y: 130, label: 'Distributed\nAnalysis', color: '#00F5D4', icon: '🔬' },
    { x: 560, y: 100, label: 'Aggregated\nInsights', color: '#A78BFA', icon: '📊' },
    { x: 700, y: 100, label: 'Business\nReporting', color: '#F59E0B', icon: '📋' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 820 200" className="w-full min-w-[540px]" style={{ maxHeight: '200px' }}>
        <defs>
          <marker id="arrow4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,245,212,0.5)" />
          </marker>
        </defs>
        <line x1="135" y1="100" x2="200" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow4)" />
        <line x1="305" y1="90" x2="360" y2="78" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow4)" />
        <line x1="305" y1="110" x2="360" y2="125" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow4)" />
        <line x1="460" y1="78" x2="518" y2="95" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow4)" />
        <line x1="460" y1="125" x2="518" y2="110" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow4)" />
        <line x1="625" y1="100" x2="660" y2="100" stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow4)" />

        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <rect x={node.x - 55} y={node.y - 30} width="110" height="60" rx="10"
              fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1" />
            <text x={node.x} y={node.y - 8} textAnchor="middle" fontSize="18">{node.icon}</text>
            {node.label.split('\n').map((line, li) => (
              <text key={li} x={node.x} y={node.y + 12 + li * 13} textAnchor="middle"
                fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="DM Sans, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// Analytics / SQL diagram
export function AnalyticsDiagram() {
  const nodes = [
    { x: 80, y: 100, label: 'Raw DB\nTables', color: '#60A5FA', icon: '🗄️' },
    { x: 240, y: 100, label: 'SQL Cleaning\n& Profiling', color: '#00F5D4', icon: '🔍' },
    { x: 400, y: 100, label: 'CTEs &\nWindow Fns', color: '#A78BFA', icon: '🧮' },
    { x: 560, y: 100, label: 'Aggregations\n& Stats', color: '#F59E0B', icon: '📐' },
    { x: 720, y: 100, label: 'Insights\n& Reports', color: '#34D399', icon: '📋' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 840 160" className="w-full min-w-[480px]" style={{ maxHeight: '160px' }}>
        <defs>
          <marker id="arrow5" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,245,212,0.5)" />
          </marker>
        </defs>
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1={80 + i * 160 + 55} y1="80" x2={80 + (i + 1) * 160 - 55} y2="80"
            stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow5)" />
        ))}
        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <rect x={node.x - 55} y={node.y - 35} width="110" height="70" rx="10"
              fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1" />
            <text x={node.x} y={node.y - 10} textAnchor="middle" fontSize="18">{node.icon}</text>
            {node.label.split('\n').map((line, li) => (
              <text key={li} x={node.x} y={node.y + 12 + li * 13} textAnchor="middle"
                fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="DM Sans, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// Water analysis diagram
export function WaterDiagram() {
  const nodes = [
    { x: 80, y: 90, label: 'WHO/UNICEF\nJMP Dataset', color: '#60A5FA', icon: '💧' },
    { x: 250, y: 90, label: 'Data\nCleaning', color: '#00F5D4', icon: '🧹' },
    { x: 420, y: 90, label: 'Statistical\nAnalysis', color: '#A78BFA', icon: '📐' },
    { x: 590, y: 90, label: 'Visualization\n& Charts', color: '#F59E0B', icon: '📊' },
    { x: 750, y: 90, label: 'SDG 6\nInsights', color: '#34D399', icon: '🎯' },
  ]

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox="0 0 860 160" className="w-full min-w-[480px]" style={{ maxHeight: '160px' }}>
        <defs>
          <marker id="arrow6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(0,245,212,0.5)" />
          </marker>
        </defs>
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1={80 + i * 170 + 55} y1="90" x2={80 + (i + 1) * 170 - 55} y2="90"
            stroke="rgba(0,245,212,0.3)" strokeWidth="1.5" markerEnd="url(#arrow6)" />
        ))}
        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.12 }}>
            <rect x={node.x - 58} y={node.y - 32} width="116" height="64" rx="10"
              fill={`${node.color}15`} stroke={`${node.color}50`} strokeWidth="1" />
            <text x={node.x} y={node.y - 10} textAnchor="middle" fontSize="18">{node.icon}</text>
            {node.label.split('\n').map((line, li) => (
              <text key={li} x={node.x} y={node.y + 12 + li * 13} textAnchor="middle"
                fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="DM Sans, sans-serif">
                {line}
              </text>
            ))}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

export function getDiagram(type: string) {
  switch (type) {
    case 'etl': return <ETLDiagram />
    case 'realtime': return <RealtimeDiagram />
    case 'batch': return <BatchDiagram />
    case 'spark': return <SparkDiagram />
    case 'analytics': return <AnalyticsDiagram />
    case 'water': return <WaterDiagram />
    default: return <ETLDiagram />
  }
}
