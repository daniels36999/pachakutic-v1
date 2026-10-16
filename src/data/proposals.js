import {
  Droplets, Route, Map, TrendingUp, Leaf, ShieldAlert, Monitor, Users,
  Building2, ClipboardCheck, Store, Recycle, CarFront, Landmark, Sprout
} from 'lucide-react'

export const mayorProposals = [
  { id: 'P1', title: 'Agua potable y saneamiento', area: 'Servicios básicos', icon: Droplets, objective: 'Ampliar y mejorar la cobertura de agua segura y saneamiento en el cantón.', actions: ['Construcción y ampliación de sistemas de agua entubada/potable en comunidades rurales priorizadas.'] },
  { id: 'P2', title: 'Vialidad cantonal', subtitle: 'Urbana y rural', area: 'Territorio', icon: Route, objective: 'Mejorar la conectividad vial del cantón para la producción y la movilidad de la población.', actions: ['Estudio y priorización de la red vial rural, principal y secundaria.'] },
  { id: 'P3', title: 'Ordenamiento territorial y catastro', area: 'Territorio', icon: Map, objective: 'Actualizar los instrumentos de planificación territorial y la información catastral.', actions: ['Actualización participativa del PDyOT cantonal.', 'Actualización del catastro urbano y rural (avalúos y catastros).'] },
  { id: 'P4', title: 'Desarrollo económico local', area: 'Desarrollo', icon: TrendingUp, objective: 'Dinamizar la economía cantonal mediante comercio, agroindustria y turismo.', actions: ['Impulsar una marca local y generar valor agregado a los productos del cantón.'] },
  { id: 'P5', title: 'Gestión ambiental y residuos sólidos', area: 'Ambiente', icon: Leaf, objective: 'Proteger el ambiente y mejorar la gestión adecuada de residuos sólidos del cantón, promoviendo prácticas sostenibles.', actions: ['Gestionar vehículos recolectores para la recolección de residuos sólidos en las parroquias de Cebadas y Palmira.'] },
  { id: 'P6', title: 'Gestión de riesgos', area: 'Seguridad y prevención', icon: ShieldAlert, objective: 'Reducir la vulnerabilidad del cantón ante amenazas naturales.', actions: ['Fortalecimiento del sistema de alerta temprana y del cuerpo de bomberos.', 'Capacitación comunitaria en gestión de riesgos.'] },
  { id: 'P7', title: 'Gobernanza digital y gobierno abierto', area: 'Gobernanza', icon: Monitor, objective: 'Modernizar la gestión municipal y cerrar la brecha digital del cantón mediante tecnologías de la información y la comunicación.', actions: ['Implementación de un portal web municipal con trámites y turnos en línea.'] },
  { id: 'P8', title: 'Participación ciudadana e interculturalidad', area: 'Participación', icon: Users, objective: 'Fortalecer la participación ciudadana y las organizaciones comunitarias.', actions: ['Asambleas cantonales y presupuesto participativo anual.', 'Fortalecimiento de organizaciones comunitarias, indígenas y de mujeres.'] },
]

export const councilProposals = [
  { id: 'P1', title: 'Normativa de uso y ocupación del suelo urbano', area: 'Planificación', icon: Building2, objective: 'Ordenar el crecimiento de la ciudad mediante normativa clara y aplicable.', actions: ['Diagnóstico técnico del crecimiento urbano actual y de las construcciones sin normativa.', 'Elaboración/actualización de la ordenanza de uso y ocupación del suelo urbano.'] },
  { id: 'P2', title: 'Fiscalización de obra pública urbana y otros', area: 'Fiscalización', icon: ClipboardCheck, objective: 'Dar seguimiento y transparencia a las obras urbanas.', actions: ['Seguimiento trimestral a cronogramas y presupuestos de obras urbanas.', 'Visitas de verificación técnica a obras en ejecución.', 'Informes públicos de fiscalización presentados ante el Concejo y la ciudadanía.'] },
  { id: 'P3', title: 'Modernización y ordenamiento de mercado y feria', area: 'Comercio', icon: Store, objective: 'Mejorar el ordenamiento, uso y servicios del mercado municipal y la feria.', actions: ['Propuesta de reordenamiento físico del mercado municipal y de los puestos de la feria.', 'Ordenanza de uso de espacios de comercio y control del tránsito en días de feria.', 'Gestión de mejoras en agua, energía, baterías sanitarias y seguridad del mercado.'] },
  { id: 'P4', title: 'Gestión integral de residuos sólidos urbanos', area: 'Ambiente', icon: Recycle, objective: 'Fortalecer la gestión y el aprovechamiento de los residuos urbanos.', actions: ['Ordenanzas de gestión integral de residuos sólidos urbanos.', 'Fiscalizar rutas y frecuencias de recolección, especialmente en parroquias rurales y comunidades.', 'Promover separación en origen, reciclaje y educación ambiental.', 'Promover el aprovechamiento y valorización de los residuos.'] },
  { id: 'P5', title: 'Movilidad y espacio público', area: 'Movilidad', icon: CarFront, objective: 'Mejorar la movilidad, los espacios públicos y la organización del tránsito.', actions: ['Propuesta de ordenanza de tránsito, circulación y estacionamiento en la cabecera cantonal, incluido el régimen especial de feria.', 'Gestión de mejoramiento de parques, aceras y espacios recreativos y deportivos.', 'Señalización vial urbana horizontal y vertical.'] },
  { id: 'P6', title: 'Seguridad ciudadana en el centro urbano', area: 'Seguridad', icon: ShieldAlert, objective: 'Coordinar acciones preventivas para mejorar la seguridad en el centro urbano.', actions: ['Mesas de coordinación periódica con la Policía Nacional y comerciantes organizados.', 'Gestión de mejoras en iluminación y cámaras de seguridad en puntos críticos del centro urbano.', 'Campañas de prevención dirigidas a comerciantes y visitantes en días de feria.'] },
  { id: 'P7', title: 'Promoción cultural y patrimonial', area: 'Cultura', icon: Landmark, objective: 'Apoyar la promoción cultural, las tradiciones y el patrimonio local.', actions: ['Apoyo normativo y logístico a fiestas tradicionales, como Semana Santa y cantonización, y a la feria como patrimonio vivo.', 'Gestión conjunta con el GAD municipal para la promoción del patrimonio ferroviario Riobamba–Alausí.'] },
]

export const roadmap = [
  { n: '01', title: 'Servicios básicos', detail: 'Agua segura y saneamiento', icon: Droplets },
  { n: '02', title: 'Vialidad', detail: 'Conectividad urbana y rural', icon: Route },
  { n: '03', title: 'Territorio', detail: 'PDyOT y catastro', icon: Map },
  { n: '04', title: 'Economía local', detail: 'Comercio, agroindustria y turismo', icon: TrendingUp },
  { n: '05', title: 'Ambiente', detail: 'Residuos y prácticas sostenibles', icon: Leaf },
  { n: '06', title: 'Gestión de riesgos', detail: 'Prevención y preparación comunitaria', icon: ShieldAlert },
  { n: '07', title: 'Gobierno digital', detail: 'Trámites y turnos en línea', icon: Monitor },
  { n: '08', title: 'Participación', detail: 'Asambleas e interculturalidad', icon: Users },
]
