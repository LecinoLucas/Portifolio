-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "projetos" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "focoPerfil" TEXT NOT NULL,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "resumo" TEXT NOT NULL,
    "stack" TEXT[],
    "contexto" TEXT NOT NULL,
    "problema" TEXT NOT NULL,
    "participacao" TEXT NOT NULL,
    "solucao" TEXT NOT NULL,
    "arquitetura" TEXT NOT NULL,
    "desafios" TEXT[],
    "resultado" TEXT NOT NULL,
    "seguranca" TEXT,
    "usuariosOuEscala" TEXT,
    "links" JSONB,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projetos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "ipHash" TEXT NOT NULL,
    "respondido" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contatos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projetos_slug_key" ON "projetos"("slug");
