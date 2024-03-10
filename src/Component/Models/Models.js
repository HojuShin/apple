import './models.css';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Apple from '../../assets/Apple'

export default function Models() {
    return (
        <div className='modellingCmp'>
            <Canvas position={[-2, 5, 2]}>
                <ambientLight position={[0, 0, 0]} intensity={8} />
                <OrbitControls enableZoom={false} />
                <Suspense fallback={null}>
                    <Apple />
                </Suspense>
            </Canvas>
        </div>
    )
}